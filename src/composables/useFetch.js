import { ref, onMounted, computed } from "vue";

export function useFetch(url) {
  const data = ref(null);
  const isLoading = ref(true);
  const error = ref(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Error al cargar los datos");
      }

      data.value = await response.json();
      isLoading.value = false;
    } catch (err) {
      error.value = err;
      isLoading.value = false;
    }
  };

  onMounted(() => {
    fetchData();
  });

  return {
    data: computed(() => data.value),
    error: computed(() => error.value),
    isLoading: computed(() => isLoading.value),
  };
}
