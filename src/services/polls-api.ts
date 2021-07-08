import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Question } from '../types'
import { config } from '../config'

export const pollsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: config.API_URL,
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ['Questions'],
  endpoints: (builders) => ({
    getQuestions: builders.query<Question[], number>({
      query: (page = 1) => `questions?page=${page}`,
    }),
    getQuestionById: builders.query<Question, number>({
      query: (id) => `questions/${id}`,
      providesTags: (result, error, id) => [{ type: 'Questions', id }],
    }),
    postAnswer: builders.mutation({
      query: ({ url, ...body }) => ({
        url: url.slice(1),
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Questions'],
    }),
    createQuestion: builders.mutation({
      query: ({ url, ...body }) => ({
        url: url.slice(1),
        method: 'POST',
        body
      }),
    })
  }),
})

export const {
  useGetQuestionsQuery,
  useGetQuestionByIdQuery,
  usePostAnswerMutation,
  useCreateQuestionMutation,
} = pollsApi
