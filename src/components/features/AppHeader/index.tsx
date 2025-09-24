import { useICBoxPJStore } from "@/lib/store";
import ActionButtons from "../ActionButtons";

const AppHeader = () => {
  const result = useICBoxPJStore((state) => state.result);

  return (
    <div className="flex flex-row justify-end items-center py-4">
      {Object.keys(result).length > 0 && <ActionButtons />}
    </div>
  );
};

export default AppHeader;
