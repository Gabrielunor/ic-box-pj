import { useICBoxPJStore } from "@/lib/store";
import { HelpTopics } from "@/lib/store/types";

export const useToggleButton = () => {
  const toggleHelpActive = useICBoxPJStore((state) => state.toggleHelpActive);
  const setHelpTopic = useICBoxPJStore((state) => state.setHelpTopic);

  const handleToggle = (helpTopic: HelpTopics) => {
    if (!helpTopic) throw new Error("Help Topic Content ID must not be null");
    setHelpTopic(helpTopic);
    toggleHelpActive();
  };

  return { handleToggle } as const;
};
