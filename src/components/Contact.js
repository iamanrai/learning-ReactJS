const Contact = () => {
  return (
    <div>
      <h1 className="m-4 p-4 font-bold text-3xl">Contact Page</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className=" border border-black p-2 m-2"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-2"
        />
        <button className="mx-4 p-2 px-5 bg-red-300 rounded-md hover:bg-red-400">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
