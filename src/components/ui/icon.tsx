import { useIcon } from "@/hooks/useIcon";
import { useICBoxPJStore } from "@/lib/store";

export const Icon = () => {
  const { code } = useICBoxPJStore((state) => state.result.decision);
  const version = useICBoxPJStore((state) => state.version);
  const { getIcon, getBackgroundClasses } = useIcon();

  const icon = getIcon(code, version);

  return (
    <div className={getBackgroundClasses(code, version)}>
      <img src={icon} alt={"ICONE-INDICATIVO-RECOMENDAÇÃO"} />
    </div>
  );
};
