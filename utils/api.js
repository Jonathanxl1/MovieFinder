export async function baseApi(endpoint = "", params = {}, withApiKey = false) {
  const config = useRuntimeConfig();
  const { api, tokenAccess, apiKey: api_key } = config.public;
  if (withApiKey) {
    params = {
      ...params,
      api_key,
    };
  }

  return await useFetch(api + `${endpoint}`, {
    params,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${tokenAccess}`,
    },
  });
}

export function getSrcImage(id = "", size = "original") {
  const config = useRuntimeConfig();
  const { imageTmbd } = config.public;
  if (!id) return;
  return `${imageTmbd}/${size}/${id}`;
}
