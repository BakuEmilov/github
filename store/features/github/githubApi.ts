import { IRepo, IUser, ServerResponse } from "@/app/models/models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com",
  }),
  endpoints: (builder) => ({
    searchUsers: builder.query<IUser[], string>({
      query: (search: string) => ({
        url: `search/users`,
        params: {
          q: search,
          per_page: 6,
        },
      }),
      transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),
    getUserRepos: builder.query<IRepo[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      })
    })
  }),
});

export const { useSearchUsersQuery , useLazyGetUserReposQuery } = githubApi;
