/**
 * 사용자/인증 서비스 API
 * User/Authentication Service API
 */

import apiClient, { setAuthToken } from './client';
import type { User } from '../../store/types';

// 로그인 요청 타입
export interface LoginRequest {
  email?: string;
  phone?: string;
  password: string;
}

// 로그인 응답 타입
export interface LoginResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

// 회원가입 요청 타입
export interface SignupRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
  verificationCode: string;
}

// 프로필 업데이트 요청 타입
export interface UpdateProfileRequest {
  name?: string;
  email?: string;
  phone?: string;
}

const userService = {
  /**
   * 로그인
   */
  login: async (credentials: LoginRequest) => {
    const response = await apiClient.post<LoginResponse>('/auth/login', credentials);
    if (response.success && response.data.accessToken) {
      setAuthToken(response.data.accessToken);
    }
    return response;
  },

  /**
   * 로그아웃
   */
  logout: async () => {
    const response = await apiClient.post<{ success: boolean }>('/auth/logout');
    setAuthToken(null);
    return response;
  },

  /**
   * 회원가입
   */
  signup: async (data: SignupRequest) => {
    return apiClient.post<LoginResponse>('/auth/signup', data);
  },

  /**
   * 토큰 갱신
   */
  refreshToken: async (refreshToken: string) => {
    const response = await apiClient.post<LoginResponse>('/auth/refresh', {
      refreshToken,
    });
    if (response.success && response.data.accessToken) {
      setAuthToken(response.data.accessToken);
    }
    return response;
  },

  /**
   * 현재 사용자 정보 조회
   */
  getCurrentUser: async () => {
    return apiClient.get<User>('/users/me');
  },

  /**
   * 프로필 업데이트
   */
  updateProfile: async (data: UpdateProfileRequest) => {
    return apiClient.patch<User>('/users/me', data);
  },

  /**
   * 비밀번호 변경
   */
  changePassword: async (currentPassword: string, newPassword: string) => {
    return apiClient.post<{ success: boolean }>('/users/change-password', {
      currentPassword,
      newPassword,
    });
  },

  /**
   * 비밀번호 재설정 요청 (이메일/SMS 발송)
   */
  requestPasswordReset: async (email?: string, phone?: string) => {
    return apiClient.post<{ success: boolean }>('/auth/password-reset/request', {
      email,
      phone,
    });
  },

  /**
   * 비밀번호 재설정
   */
  resetPassword: async (token: string, newPassword: string) => {
    return apiClient.post<{ success: boolean }>('/auth/password-reset/confirm', {
      token,
      newPassword,
    });
  },

  /**
   * 인증 코드 요청 (SMS/이메일)
   */
  requestVerificationCode: async (type: 'email' | 'sms', target: string) => {
    return apiClient.post<{ success: boolean }>('/auth/verification/request', {
      type,
      target,
    });
  },

  /**
   * 인증 코드 확인
   */
  verifyCode: async (type: 'email' | 'sms', target: string, code: string) => {
    return apiClient.post<{ success: boolean; verified: boolean }>('/auth/verification/verify', {
      type,
      target,
      code,
    });
  },

  /**
   * 회원 탈퇴
   */
  deleteAccount: async (password: string) => {
    return apiClient.post<{ success: boolean }>('/users/delete-account', {
      password,
    });
  },
};

export default userService;
