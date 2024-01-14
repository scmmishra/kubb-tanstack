import client from '@kubb/swagger-client/client'
import { useMutation } from '@tanstack/vue-query'
import type {
  CreateUsersWithListInputMutationRequest,
  CreateUsersWithListInputMutationResponse,
  CreateUsersWithListInputError
} from '../types/CreateUsersWithListInput'
import type { UseMutationOptions } from '@tanstack/vue-query'

type CreateUsersWithListInputClient = typeof client<
  CreateUsersWithListInputMutationResponse,
  CreateUsersWithListInputError,
  CreateUsersWithListInputMutationRequest
>
type CreateUsersWithListInput = {
  data: CreateUsersWithListInputMutationResponse
  error: CreateUsersWithListInputError
  request: CreateUsersWithListInputMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: CreateUsersWithListInputMutationResponse
  client: {
    parameters: Partial<Parameters<CreateUsersWithListInputClient>[0]>
    return: Awaited<ReturnType<CreateUsersWithListInputClient>>
  }
}
/**
 * @description Creates list of users with given input array
 * @summary Creates list of users with given input array
 * @link /user/createWithList */
export function useCreateUsersWithListInput(
  options: {
    mutation?: UseMutationOptions<
      CreateUsersWithListInput['response'],
      CreateUsersWithListInput['error'],
      CreateUsersWithListInput['request'],
      unknown
    >
    client?: CreateUsersWithListInput['client']['parameters']
  } = {}
) {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CreateUsersWithListInput['data'],
        CreateUsersWithListInput['error'],
        CreateUsersWithListInput['request']
      >({
        method: 'post',
        url: `/user/createWithList`,
        data,
        ...clientOptions
      })
      return res.data
    },
    ...mutationOptions
  })
}
