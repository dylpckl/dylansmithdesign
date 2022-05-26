import Section from "../components/section";

function contact() {
  return (
    <Section>
      <h1>make this a newsletter instead?</h1>
      <form className="w-full max-w-lg">
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border border-red-500 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              id="grid-first-name"
              type="text"
              placeholder="John Doe"
            />
            <p className="text-xs italic text-red-500">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="email"
              type="text"
              placeholder="johndoe@gmail.com"
            />
            <p className="text-xs italic text-gray-600">
              Make it as long and as crazy as youd like
            </p>
          </div>
        </div>
        <input className="" id="submit" type="submit" />
      </form>
    </Section>
  );
}

export default contact;
