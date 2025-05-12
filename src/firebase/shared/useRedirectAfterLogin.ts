import { useRedirectParam } from "@/firebase/shared/useRedirectParam";
import { useRouter } from "@/i18n/navigation";

export function useRedirectAfterLogin() {
  const router = useRouter();
  const redirect = useRedirectParam();

  return function () {
    router.push(redirect ?? "/");
    router.refresh();
  };
}
