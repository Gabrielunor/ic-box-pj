import AppHeader from "@/components/features/AppHeader";
import Dialog from "@/components/features/Dialog";
import LoadingOverlay from "@/components/features/LoadingOverlay";
import SearchForm from "@/components/features/SearchForm";

const SearchFormPage = () => {
  return (
    <div className="w-screen max-w-screen-ic mx-auto">
      <Dialog />
      <AppHeader />
      <SearchForm />
      <LoadingOverlay />
    </div>
  );
};

export default SearchFormPage;
