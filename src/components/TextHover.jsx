export default function TextHover({ titile1, titile2 }) {
  return (
    <div className="overflow-hidden transition-all duration-200 ease-in-out  group">
      <div className="relative transition-all duration-500 ease-in-out">
        <div>
          <h1 className="translate-y-[0%] group-hover:translate-y-[-100%] absolute  left-0 transition-all ease-in-out duration-500">
            <div className="translate-y-[0%] group-hover:translate-y-[-100%] transition-all ease-in-out duration-500 text-white">
              {titile1}
            </div>
          </h1>
          <h1 className="relative transition-all duration-500 ease-in-out">
            <div className="translate-y-[100%] group-hover:translate-y-[0%] transition-all ease-in-out duration-500 text-white">
              {titile2}
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}
