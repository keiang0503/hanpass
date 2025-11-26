import { FolderIcon, CheckCircleIcon, ClockIcon, ExternalLinkIcon, CopyIcon, LockIcon, CheckIcon, LayoutGridIcon } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { DownloadButton, DownloadAllButton } from "../../components/DownloadButton";

// 퍼블리싱 화면 데이터
const publishingData = [
  {
    id: "favorite",
    name: "즐겨찾기",
    path: "/favoriteu95375",
    status: "completed",
    description: "즐겨찾기 및 최근 송금내역 관리 화면",
  },
  {
    id: "transform",
    name: "해외송금",
    path: "/transformu95750",
    status: "completed",
    description: "송금 변환 화면",
  },
];

export const PublishingStatus = (): JSX.Element => {
  const [selectedScreen, setSelectedScreen] = useState<string>("favorite");
  const [copied, setCopied] = useState(false);
  const [baseUrl, setBaseUrl] = useState("");

  const selectedData = publishingData.find((item) => item.id === selectedScreen);

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  const getFullUrl = (path: string) => `${baseUrl}${path}`;

  const handleCopyUrl = async () => {
    if (selectedData) {
      const fullUrl = getFullUrl(selectedData.path);
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* LNB (Left Navigation Bar) */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col flex-shrink-0">
        {/* LNB Header */}
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-lg font-bold text-gray-900">퍼블리싱 현황</h1>
          <p className="text-sm text-gray-500 mt-1">화면 목록</p>
        </div>

        {/* LNB Menu List */}
        <nav className="flex-1 overflow-y-auto p-2">
          <ul className="space-y-1">
            {publishingData.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setSelectedScreen(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                    selectedScreen === item.id
                      ? "bg-blue-50 text-blue-700 border border-blue-200"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <FolderIcon className="w-5 h-5 flex-shrink-0" />
                  <span className="flex-1 font-medium">{item.name}</span>
                  {item.status === "completed" ? (
                    <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  ) : (
                    <ClockIcon className="w-4 h-4 text-yellow-500" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* 공통 컴포넌트 링크 */}
        <div className="p-2 border-t border-gray-200">
          <Link
            to="/components"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors hover:bg-blue-50 text-blue-600 border border-blue-200 bg-blue-50/50"
          >
            <LayoutGridIcon className="w-5 h-5 flex-shrink-0" />
            <span className="flex-1 font-medium">공통 컴포넌트</span>
          </Link>
        </div>

        {/* LNB Footer - Summary */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">완료</span>
            <span className="font-medium text-green-600">
              {publishingData.filter((item) => item.status === "completed").length}
            </span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-gray-600">대기</span>
            <span className="font-medium text-yellow-600">
              {publishingData.filter((item) => item.status === "pending").length}
            </span>
          </div>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {selectedData ? (
          <>
            {/* Info Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
              <div className="flex items-center gap-3">
                <h2 className="font-semibold text-gray-900">{selectedData.name}</h2>
                <span className="text-sm text-gray-500">{selectedData.description}</span>
                {selectedData.status === "completed" ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    <CheckCircleIcon className="w-3 h-3" />
                    완료
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                    <ClockIcon className="w-3 h-3" />
                    대기
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {/* 브라우저 스타일 URL 바 */}
                <div className="flex items-center bg-gray-100 rounded-lg border border-gray-200 px-3 py-1.5 min-w-[300px]">
                  <LockIcon className="w-3.5 h-3.5 text-gray-400 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700 truncate flex-1">
                    {getFullUrl(selectedData.path)}
                  </span>
                  <button
                    onClick={handleCopyUrl}
                    className="ml-2 p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                    title="URL 복사"
                  >
                    {copied ? (
                      <CheckIcon className="w-4 h-4 text-green-500" />
                    ) : (
                      <CopyIcon className="w-4 h-4 text-gray-500" />
                    )}
                  </button>
                </div>
                {selectedData.status === "completed" && (
                  <>
                    <DownloadButton
                      screenId={selectedData.id}
                      screenName={selectedData.name}
                    />
                    <DownloadAllButton />
                    <a
                      href={selectedData.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 px-2 py-1"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      새 탭
                    </a>
                  </>
                )}
              </div>
            </div>

            {/* Preview Area */}
            <div className="flex-1 bg-gray-100 p-4">
              {selectedData.status === "completed" ? (
                <div className="h-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                  <iframe
                    src={selectedData.path}
                    className="w-full h-full"
                    title={`${selectedData.name} Preview`}
                  />
                </div>
              ) : (
                <div className="h-full flex items-center justify-center bg-white rounded-lg border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <ClockIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500 font-medium">아직 퍼블리싱되지 않은 화면입니다</p>
                    <p className="text-sm text-gray-400 mt-1">개발 예정</p>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            왼쪽 메뉴에서 화면을 선택하세요
          </div>
        )}
      </main>
    </div>
  );
};
