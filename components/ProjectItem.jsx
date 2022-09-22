import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import ImageGallery from "react-image-gallery";
import imagegallery from "react-image-gallery/styles/css/image-gallery.css";
import {FaUserTie, FaUsers, FaCode, FaBolt } from "react-icons/fa";


const ProjectItem = ({
  title,
  backgroundImg,
  tech,
  description,
  role,
  team,
  type,
  galleryImages,
}) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // Convert imported images to a format that react-image-gallery accepts
  galleryImages = galleryImages.map((image) => {
    const container = {};
    container["original"] = image.src;
    return container;
  });

  return (
    <>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={backgroundImg}
          alt="/"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{tech}</p>
          <div className="flex justify-center">
            <button onClick={openModal}>
              <p className="text-center py-3 px-7 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                More Info
              </p>
            </button>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          {/* overflow-y-auto to make it scrollable: */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex mt-12 max-h-[90%] items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-900 border-b border-gray-300 mb-2 pb-4"
                  >
                    {title}
                  </Dialog.Title>

                  <div className="flex flex-row justify-around items-center text-center">
                    <div className="flex flex-col ">
                      <div className="flex justify-center">
                        <FaBolt size={25} />
                        <p className="mx-3 font-medium">Type</p>
                        <FaBolt size={25} />
                      </div>
                      <div className="mt-1"> {type} </div>

                      <div className="flex justify-center mt-5">
                        <FaCode size={25} />
                        <p className="mx-3 font-medium">Tech</p>
                        <FaCode size={25} />
                      </div>
                      <div className="mt-1">{tech} </div>
                    </div>

                    <div className="flex flex-col m-4">
                      <div className="flex justify-center">
                        <FaUserTie size={25} />
                        <p className="mx-3 font-medium">Role</p>
                        <FaUserTie size={25} />
                      </div>
                      <div className="mt-1">{role} </div>

                      <div className="flex justify-center mt-5">
                        <FaUsers size={25} />
                        <p className="mx-3 font-medium">Team</p>
                        <FaUsers size={25} />
                      </div>
                      <div className="mt-1">{team} </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{description}</p>
                  </div>

                  <div className="flex justify-center">
                    <div className="mt-4">
                      <ImageGallery
                        items={galleryImages}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showBullets={true}
                        showThumbnails={false}
                        lazyLoad={true}
                      ></ImageGallery>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProjectItem;
