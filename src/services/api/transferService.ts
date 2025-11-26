/**
 * 송금 서비스 API
 * Transfer Service API
 */

import apiClient from './client';
import type { TransferInfo, WalletInfo, Coupon } from '../../store/types';

// 송금 요청 타입
export interface TransferRequest {
  sendAmount: number;
  sendCurrency: string;
  receiveCurrency: string;
  recipientId: number;
  walletId: string;
  couponId?: string;
  receiveMethod: string;
}

// 환율 정보 타입
export interface ExchangeRate {
  fromCurrency: string;
  toCurrency: string;
  rate: number;
  fee: number;
  updatedAt: string;
}

// 송금 결과 타입
export interface TransferResult {
  transactionId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  sendAmount: number;
  receiveAmount: number;
  fee: number;
  estimatedTime: string;
  createdAt: string;
}

const transferService = {
  /**
   * 환율 정보 조회
   */
  getExchangeRate: async (fromCurrency: string, toCurrency: string) => {
    return apiClient.get<ExchangeRate>('/transfer/exchange-rate', {
      from: fromCurrency,
      to: toCurrency,
    });
  },

  /**
   * 송금 예상 정보 계산
   */
  calculateTransfer: async (
    amount: number,
    fromCurrency: string,
    toCurrency: string,
    couponId?: string
  ) => {
    return apiClient.post<TransferInfo>('/transfer/calculate', {
      amount,
      fromCurrency,
      toCurrency,
      couponId,
    });
  },

  /**
   * 송금 요청
   */
  createTransfer: async (request: TransferRequest) => {
    return apiClient.post<TransferResult>('/transfer/create', request);
  },

  /**
   * 송금 상태 조회
   */
  getTransferStatus: async (transactionId: string) => {
    return apiClient.get<TransferResult>(`/transfer/${transactionId}/status`);
  },

  /**
   * 송금 내역 조회
   */
  getTransferHistory: async (page = 1, limit = 20) => {
    return apiClient.get<TransferResult[]>('/transfer/history', {
      page: String(page),
      limit: String(limit),
    });
  },

  /**
   * 지갑 목록 조회
   */
  getWallets: async () => {
    return apiClient.get<WalletInfo[]>('/wallets');
  },

  /**
   * 지갑 상세 조회
   */
  getWalletDetail: async (walletId: string) => {
    return apiClient.get<WalletInfo>(`/wallets/${walletId}`);
  },

  /**
   * 사용 가능한 쿠폰 목록 조회
   */
  getAvailableCoupons: async () => {
    return apiClient.get<Coupon[]>('/coupons/available');
  },

  /**
   * 송금 가능 국가/통화 목록 조회
   */
  getSupportedCountries: async () => {
    return apiClient.get<
      Array<{
        countryCode: string;
        countryName: string;
        currency: string;
        flag: string;
      }>
    >('/transfer/supported-countries');
  },

  /**
   * 수취 방법 조회
   */
  getReceiveMethods: async (countryCode: string) => {
    return apiClient.get<
      Array<{
        id: string;
        name: string;
        description: string;
        estimatedTime: string;
      }>
    >(`/transfer/receive-methods/${countryCode}`);
  },
};

export default transferService;
