import type { FetchOptions, FetchError } from "ofetch"
import { BASE_URL } from "./api.config"

type HttpMethod =
	| 'GET'
	| 'HEAD'
	| 'PATCH'
	| 'POST'
	| 'PUT'
	| 'DELETE'
	| 'CONNECT'
	| 'OPTIONS'
	| 'TRACE';

export const useFetchApi = () => {

    const myCustomFetch = async (url: string, config?: FetchOptions) => {
        config = { baseURL: BASE_URL, retry: 0, ...config };

        if (config.method && !isValidHttpMethod(config.method)) {
			throw new Error(`Invalid HTTP method: ${config.method}`);
		}

        try {
            const response = await $fetch(url, {
                ...config,
                method: config.method?.toUpperCase() as HttpMethod,
            })

            return response;
        } catch (e) {
            console.error('Error in useFetchApi: ', e);
            throw e;
        }
    }

    return myCustomFetch;
}

function isValidHttpMethod(method: string): method is HttpMethod {
	const validMethods: HttpMethod[] = [
		'GET',
		'HEAD',
		'PATCH',
		'POST',
		'PUT',
		'DELETE',
		'CONNECT',
		'OPTIONS',
		'TRACE',
	];
	return validMethods.includes(method.toUpperCase() as HttpMethod);
}