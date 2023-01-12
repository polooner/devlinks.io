import React, { useRef } from "react";

export default function AdminForm(props) {
  const titleRef = useRef();
  const typeRef = useRef();
  const bioRef = useRef();
  const urlRef = useRef();
  const imageRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredType = typeRef.current.value;
    const enteredUrl = urlRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredBio = bioRef.current.value;

    const resourceData = {
      label: enteredTitle,
      image: enteredImage,
      url: enteredUrl,
      bio: enteredBio,
      type: enteredType,
    };

    props.onAddResource(resourceData);

    titleRef.current.value = "";
    typeRef.current.value = "";
    urlRef.current.value = "";
    imageRef.current.value = "";
    bioRef.current.value = "";
  }

  return (
    <form
      onSubmit={submitHandler}
      className="md:m-10 m-4 flex flex-col space-y-3 justify-center items-center w-full"
    >
      <h1 className="text-4xl drop-shadow-2xl font-black bg-gradient-to-bl from-yellow-200 p-2 to-white bg-clip-text text-transparent">
        Welcome, admin.
      </h1>
      <label className="font-bold">Title</label>
      <input
        required
        ref={titleRef}
        type="text"
        maxLength="40"
        className="border-none text-xs outline-none shadow-lg h-10 font-semibold text-center duration-300 focus:shadow-2xl focus:ring-4 focus:ring-blue-300 w-[80%] md:w-[45%] rounded-full"
      ></input>
      <label className="font-bold">Type</label>
      <input
        required
        ref={typeRef}
        type="text"
        maxLength="50"
        className="border-none text-xs outline-none shadow-lg h-10 font-semibold text-center duration-300 focus:shadow-2xl focus:ring-4 focus:ring-blue-300 w-[80%] md:w-[45%] rounded-full"
      ></input>
      <label className="font-bold">Link</label>
      <input
        required
        ref={urlRef}
        type="text"
        maxLength="80"
        className="border-none text-xs outline-none shadow-lg h-10 font-semibold text-center duration-300 focus:shadow-2xl focus:ring-4 focus:ring-blue-300 w-[80%] md:w-[45%] rounded-full"
      ></input>
      <label className="font-bold">Image</label>
      <input
        ref={imageRef}
        maxLength="80"
        type="text"
        className="border-none text-xs outline-none shadow-lg h-10 font-semibold text-center duration-300 focus:shadow-2xl focus:ring-4 focus:ring-blue-300 w-[80%] md:w-[45%] rounded-full"
      ></input>{" "}
      <label className="font-bold">Bio</label>
      <textarea
        required
        ref={bioRef}
        maxLength="300"
        type="text"
        className="border-none text-xs outline-none shadow-lg h-32 p-2 font-semibold text-center duration-300 focus:shadow-2xl focus:ring-4 focus:ring-blue-300 w-[80%] md:w-[45%] resize-none scrollbar-hide rounded-md"
      ></textarea>
      <button
        type="submit"
        className="border-none text-xs bg-black font-semibold rounded-md shadow-2xl p-2 text-white h-fit w-fit"
      >
        Submit
      </button>
    </form>
  );
}
