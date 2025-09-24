import HelpIcon from "@/assets/icons/help-icon.png";
import { Button } from "@/components/ui/button";

import { HelpTopics } from "@/lib/store/types";
import { useToggleButton } from "./hooks";

type Props = {
  contentId: HelpTopics;
};

const ToggleButton = ({ contentId }: Props) => {
  const { handleToggle } = useToggleButton();
  return (
    <Button
      variant="ghost"
      className="hover:bg-transparent"
      onClick={() => handleToggle(contentId)}
    >
      <img src={HelpIcon} alt="Help Icon" />
    </Button>
  );
};

export default ToggleButton;
