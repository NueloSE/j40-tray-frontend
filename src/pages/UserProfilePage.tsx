import { useGetMyUser, useUpdateMyUser } from '@/api/MyUserApi';
import UserProfileForm from '@/forms/user-profile-form/UserProfileForm';

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  // Show loading state while fetching user data
  if (isGetLoading) {
    return <span>Loading...</span>;
  }

  // Handle case where user data couldn't be loaded
  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }

  // Render the user profile form once the data is fetched
  return (
    <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdateLoading} />
  );
};

export default UserProfilePage;
