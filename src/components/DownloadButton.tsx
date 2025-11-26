import React, { useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { DownloadIcon, Loader2Icon } from "lucide-react";

// 화면별 소스 파일 매핑
const screenSourceFiles: Record<string, { path: string; files: string[] }> = {
  favorite: {
    path: "Favorite",
    files: [
      "src/screens/Favorite/Favorite.tsx",
    ],
  },
  transform: {
    path: "Transform",
    files: [
      "src/screens/Transform/Transform.tsx",
      "src/screens/Transform/sections/FrameSubsection/FrameSubsection.tsx",
      "src/screens/Transform/sections/ContainerSubsection/ContainerSubsection.tsx",
    ],
  },
};

// 공통 파일 (모든 다운로드에 포함)
const commonFiles = [
  // 스타일
  "tailwind.css",
  // UI 컴포넌트
  "src/components/ui/button.tsx",
  "src/components/ui/card.tsx",
  "src/components/ui/tabs.tsx",
  // 유틸리티
  "src/lib/utils.ts",
];

// 설정 파일 (프로젝트 셋업용)
const configFiles = [
  "package.json",
  "tailwind.config.js",
  "tsconfig.json",
  "postcss.config.js",
];

interface DownloadButtonProps {
  screenId: string;
  screenName: string;
}

// 전체 소스 다운로드 버튼
export const DownloadAllButton: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadAll = async () => {
    setIsDownloading(true);

    try {
      const zip = new JSZip();

      // 모든 화면의 소스 파일 수집
      const allScreenFiles: string[] = [];
      Object.values(screenSourceFiles).forEach((screen) => {
        allScreenFiles.push(...screen.files);
      });

      // 중복 제거 후 전체 파일 목록 생성
      const allFiles = [...new Set([...allScreenFiles, ...commonFiles, ...configFiles])];

      for (const filePath of allFiles) {
        try {
          const response = await fetch(`/api/source/${encodeURIComponent(filePath)}`);

          if (response.ok) {
            const content = await response.text();
            zip.file(filePath, content);
          } else {
            console.warn(`파일을 가져올 수 없습니다: ${filePath}`);
          }
        } catch (error) {
          console.warn(`파일 처리 중 오류: ${filePath}`, error);
        }
      }

      // ZIP 파일 생성 및 다운로드
      const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
      const zipBlob = await zip.generateAsync({ type: "blob" });
      saveAs(zipBlob, `hanpass_all_source_${timestamp}.zip`);
    } catch (error) {
      console.error("다운로드 중 오류:", error);
      alert("전체 소스 다운로드 중 오류가 발생했습니다.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownloadAll}
      disabled={isDownloading}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
        isDownloading
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-green-600 text-white hover:bg-green-700"
      }`}
      title="전체 소스 다운로드"
    >
      {isDownloading ? (
        <>
          <Loader2Icon className="w-4 h-4 animate-spin" />
          다운로드 중...
        </>
      ) : (
        <>
          <DownloadIcon className="w-4 h-4" />
          전체 소스 다운로드
        </>
      )}
    </button>
  );
};

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  screenId,
  screenName,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    const screenConfig = screenSourceFiles[screenId];
    if (!screenConfig) {
      alert("해당 화면의 소스 파일 정보가 없습니다.");
      return;
    }

    setIsDownloading(true);

    try {
      const zip = new JSZip();

      // 화면 소스 파일 가져오기 (화면 파일 + 공통 파일 + 설정 파일)
      const allFiles = [...screenConfig.files, ...commonFiles, ...configFiles];

      for (const filePath of allFiles) {
        try {
          // /api/source/ 엔드포인트를 통해 소스 파일 가져오기
          const response = await fetch(`/api/source/${encodeURIComponent(filePath)}`);

          if (response.ok) {
            const content = await response.text();
            zip.file(filePath, content);
          } else {
            console.warn(`파일을 가져올 수 없습니다: ${filePath}`);
          }
        } catch (error) {
          console.warn(`파일 처리 중 오류: ${filePath}`, error);
        }
      }

      // ZIP 파일 생성 및 다운로드
      const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
      const zipBlob = await zip.generateAsync({ type: "blob" });
      saveAs(zipBlob, `${screenName}_source_${timestamp}.zip`);
    } catch (error) {
      console.error("다운로드 중 오류:", error);
      alert("소스 다운로드 중 오류가 발생했습니다.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading || !screenSourceFiles[screenId]}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
        isDownloading || !screenSourceFiles[screenId]
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
      title="소스 다운로드"
    >
      {isDownloading ? (
        <>
          <Loader2Icon className="w-4 h-4 animate-spin" />
          다운로드 중...
        </>
      ) : (
        <>
          <DownloadIcon className="w-4 h-4" />
          소스 다운로드
        </>
      )}
    </button>
  );
};
