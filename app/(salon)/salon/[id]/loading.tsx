import { Spinner } from "@/components/ui/spinner";

function loading() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Spinner className="size-8" />
    </div>
  );
}

export default loading;
