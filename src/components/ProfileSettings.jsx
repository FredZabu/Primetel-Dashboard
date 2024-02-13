

const ProfileSettings = () => {
  return (
    <>
      <div className="flex border-b border-gray-300 my-4">
        <div className="w-1/2 p-4">
          <h4>Profile Information</h4>
          <p>Adjust your profile information</p>
        </div>

        <div className="w-1/2 p-4">
          <img src="https://via.placeholder.com/150" alt="Profile" />
          <h3 className="text-xl font-semibold mb-2">Profile Information</h3>
          <p className="text-gray-600">
            Fill out the form below to update your profile information.
          </p>
          <form>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="formBasicName"
              >
                Name
              </label>
              <input
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                type="text"
                id="formBasicName"
                placeholder="Enter name"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="formBasicEmail"
              >
                Email address
              </label>
              <input
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                type="email"
                id="formBasicEmail"
                placeholder="Enter email"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="formBasicPhone"
              >
                Phone Number
              </label>
              <input
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                type="text"
                id="formBasicPhone"
                placeholder="Enter phone number"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="formBasicAddress"
              >
                Address
              </label>
              <input
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                type="text"
                id="formBasicAddress"
                placeholder="Enter address"
              />
            </div>

            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>

      <div className="flex  border-b border-gray-300 my-4">
        <div className="w-1/2 p-4">
          <h4>Password</h4>
          <p>Enter new and old passwords</p>
        </div>

        <div className="w-1/2 p-4 ">
          <form>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="currentPassword"
              >
                Current Password
              </label>
              <input
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                type="text"
                id="currentPassword"
                placeholder="Enter current password"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="newPassword"
              >
                New Password
              </label>
              <input
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                type="email"
                id="newPassword"
                placeholder="Enter new password"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="confirmNewPassword"
              >
                Confirm New Password
              </label>
              <input
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                type="text"
                id="confirmNewPassword"
                placeholder="Enter phone number"
              />
            </div>

            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>

      <div className="flex  border-b border-gray-300 my-4">
        <div className="w-1/2 p-4">
          <h4>Delete Account</h4>
          <p>Manage your account</p>
        </div>

        <div className="w-1/2 p-4 ">
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolores
            corporis rem ducimus soluta reiciendis dolor laboriosam molestias
            obcaecati consectetur dicta illo suscipit optio adipisci,
            reprehenderit doloribus repudiandae eum praesentium.
          </p>
          <form>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-1/2"
              type="submit"
            >
              Deactivate Account
            </button>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300 w-1/2"
              type="submit"
            >
              Delete Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
