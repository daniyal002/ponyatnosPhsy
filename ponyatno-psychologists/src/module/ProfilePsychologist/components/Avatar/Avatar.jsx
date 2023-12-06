import React, { useState } from "react";
import { useSetUserMainPhoto } from "../../hook/useSetUserMainPhoto";
import { useForm } from "react-hook-form";

const Avatar = ({ userId, avatarImage }) => {
  const { mutate, err } = useSetUserMainPhoto();
  const { handleSubmit } = useForm();

  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const base64ImageString = `data:image/jpeg;base64,${avatarImage}`;

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Здесь вы можете выполнить необходимые действия с выбранным файлом, например, сохранить его в состоянии
      setUploadedFile(selectedFile);
      setUploadedFileName(selectedFile.name);
    }
  };

  const uploadPhoto = () => {
    if (uploadedFile) {
      const body = {
        userPhoto: uploadedFile,
        userId: userId,
      };

      mutate(body);
      setIsOpen(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-y-3 w-full md:w-1/2">
      <div className="w-[250px] h-[250px] overflow-hidden flex justify-center">
        <img
          src={
            avatarImage
              ? base64ImageString
              : "https://shapka-youtube.ru/wp-content/uploads/2020/12/man-ava1.jpg"
          }
          alt="avatar"
          className="w-full h-auto object-cover  rounded-full border-[2px] border-green-pon hover:scale-105 duration-500 hover:border-[#004E64] "
        />
      </div>
      <div className="flex flex-col gap-y-3">
        <button
          className="bg-white p-4 rounded-lg text-green-pon uppercase font-bold hover:bg-[#0da47c;] hover:text-white duration-700"
          onClick={() => setIsOpen(true)}
        >
          Загрузить фото
        </button>
        {/* <input type="file" onChange={handleFileChange} /> */}

        {isOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-40"
            // onClick={() => setIsOpen(false)}
          >
            <div
              className="flex justify-center max-h-[100vh] "
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="w-5 h-5 absolute top-2 right-2 p-2 text-green-pon rounded-full bg-white hover:bg-[#0da47c;] hover:text-white duration-300"
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
            </div>
            <form
              onSubmit={handleSubmit(uploadPhoto)}
              className="flex flex-col gap-y-2 w-[90%] md:w-[25%] xs:w-[55%]"
            >
              <label
                htmlFor="avatar"
                className="bg-green-pon text-white font-semibold rounded-lg p-4 flex gap-x-2 items-center"
              >
                <input
                  type="file"
                  onChange={handleFileChange}
                  id="avatar"
                  className="hidden"
                />
                {uploadedFileName
                  ? `Выбранное фото: ${uploadedFileName}`
                  : "Выберите фото"}
                <img
                  src="./images/upload-photo-svgrepo-com.svg"
                  alt="upload-photo"
                  className="w-[32px]"
                />
              </label>
              <button
                type="submit"
                className="bg-white p-4 rounded-lg text-green-pon uppercase font-bold hover:bg-[#0da47c;] hover:text-white duration-700"
              >
                Загрузить фото
              </button>
            </form>
          </div>
        )}

        {/* <button className="bg-white p-4 rounded-lg text-green-pon uppercase font-bold hover:bg-[#0da47c;] hover:text-white duration-700">
          Загрузить фото
        </button>
        <button className="bg-white p-4 rounded-lg text-green-pon uppercase font-bold hover:bg-red-700 hover:text-white duration-700">
          Удалить фото
        </button> */}
      </div>
    </div>
  );
};

export default Avatar;
