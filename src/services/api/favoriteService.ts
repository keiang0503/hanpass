/**
 * 즐겨찾기/수신자 서비스 API
 * Favorite/Recipient Service API
 */

import apiClient from './client';
import type { FavoriteRecipient } from '../../store/types';

// 수신자 생성 요청 타입
export interface CreateRecipientRequest {
  name: string;
  phone: string;
  countryCode: string;
  bankCode?: string;
  bankAccountNumber?: string;
  relationship?: string;
}

// 수신자 수정 요청 타입
export interface UpdateRecipientRequest extends Partial<CreateRecipientRequest> {
  isFavorite?: boolean;
}

const favoriteService = {
  /**
   * 즐겨찾기 목록 조회
   */
  getFavorites: async () => {
    return apiClient.get<FavoriteRecipient[]>('/recipients/favorites');
  },

  /**
   * 최근 송금 내역 조회
   */
  getRecentTransfers: async (limit = 10) => {
    return apiClient.get<FavoriteRecipient[]>('/recipients/recent', {
      limit: String(limit),
    });
  },

  /**
   * 모든 수신자 목록 조회
   */
  getAllRecipients: async (page = 1, limit = 20) => {
    return apiClient.get<FavoriteRecipient[]>('/recipients', {
      page: String(page),
      limit: String(limit),
    });
  },

  /**
   * 수신자 상세 조회
   */
  getRecipientDetail: async (recipientId: number) => {
    return apiClient.get<FavoriteRecipient>(`/recipients/${recipientId}`);
  },

  /**
   * 수신자 생성
   */
  createRecipient: async (data: CreateRecipientRequest) => {
    return apiClient.post<FavoriteRecipient>('/recipients', data);
  },

  /**
   * 수신자 수정
   */
  updateRecipient: async (recipientId: number, data: UpdateRecipientRequest) => {
    return apiClient.patch<FavoriteRecipient>(`/recipients/${recipientId}`, data);
  },

  /**
   * 수신자 삭제
   */
  deleteRecipient: async (recipientId: number) => {
    return apiClient.delete<{ success: boolean }>(`/recipients/${recipientId}`);
  },

  /**
   * 즐겨찾기 추가
   */
  addToFavorites: async (recipientId: number) => {
    return apiClient.post<FavoriteRecipient>(`/recipients/${recipientId}/favorite`);
  },

  /**
   * 즐겨찾기 제거
   */
  removeFromFavorites: async (recipientId: number) => {
    return apiClient.delete<{ success: boolean }>(`/recipients/${recipientId}/favorite`);
  },

  /**
   * 수신자 검색
   */
  searchRecipients: async (query: string) => {
    return apiClient.get<FavoriteRecipient[]>('/recipients/search', {
      q: query,
    });
  },

  /**
   * 은행 목록 조회
   */
  getBanks: async (countryCode: string) => {
    return apiClient.get<
      Array<{
        code: string;
        name: string;
        logo?: string;
      }>
    >(`/banks/${countryCode}`);
  },
};

export default favoriteService;
