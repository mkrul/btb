import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { updateUser } from "../../redux/actions/user";
import { User } from "../../redux/slices/userSlice";
import { RootState } from "../../redux/store";

const AlignmentPage = () => {
  const dispatch = useAppDispatch();
  const [alignment, setAlignment] = useState("");
  const user: User | null = useAppSelector(
    (state: RootState) => state.userData.user
  );

  const handleSetAlignment = (value: string) => {
    setAlignment(value);
    displayNewAlignment(value);
    if (user) {
      console.log("in AlignmentPage.tsx, user._id:", user._id);
      console.log("in AlignmentPage.tsx, alignment:", value);
      console.log("in AlignmentPage.tsx:", { alignment: value });
      dispatch(updateUser(user._id, { alignment: value }));
    }
  };

  const displayNewAlignment = (value: string) => {
    const selected = document.getElementById(
      `${value}-radio`
    ) as HTMLInputElement;
    selected.checked = true;
    const style = document.getElementById(`${value}-style`);
    style?.classList.remove("hidden");
    hideUnselectedAlignment(selected);
  };

  const hideUnselectedAlignment = (selected: HTMLInputElement) => {
    document.querySelectorAll("input[type=checkbox]").forEach((el) => {
      const option = el as HTMLInputElement;
      if (option !== selected) {
        option.removeAttribute("checked");
        const style = document.getElementById(`${option.value}-style`);
        style?.classList.add("hidden");
      }
    });
  };

  return (
    <div className="antialiased bg-body text-body font-body">
      <section className="pt-8 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 md:mb-20 text-5xl sm:text-6xl md:text-9xl xl:text-10xl font-semibold font-heading"></h2>
          <div className="flex flex-wrap -m-5">
            <div className="w-full md:w-1/2 p-5">
              <div className="overflow-hidden rounded-2xl">
                <img
                  className="w-full h-full object-cover"
                  src={require("../../assets/images/pit-bull-02.jpg")}
                  alt="Photo by Katie Bernotsky"
                />
                <div className="mt-4 text-sm">
                  Photo by{" "}
                  <a href="https://unsplash.com/@gixxerkidd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                    Karthegan Padmanaban
                  </a>{" "}
                  on{" "}
                  <a href="https://unsplash.com/photos/white-and-brown-american-pitbull-terrier-puppy-on-green-grass-field-during-daytime-zLMkYi-3-W0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                    Unsplash
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-5">
              <div className="flex flex-col justify-center h-full">
                <div>
                  <h6 className="mb-10 text-5xl font-medium tracking-tight font-heading">
                    How do you identify your feelings about "pit bulls"?
                  </h6>
                  <div className="mb-6 ml-6">
                    <label className="relative flex items-center gap-2 mb-4">
                      <input
                        className="input-radio-1-06 opacity-0 absolute h-8 w-8 rounded-full"
                        type="checkbox"
                        id="pro-radio"
                        name="field-radio"
                        value="pro"
                        checked={alignment === "pro"}
                        onChange={() => handleSetAlignment("pro")}
                      />
                      <div className="border border-neutral-600 w-8 h-8 flex justify-center items-center rounded-full">
                        <svg
                          className="fill-current hidden"
                          id="pro-style"
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={11}
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <line
                            x1="0.353553"
                            y1="5.64645"
                            x2="4.35355"
                            y2="9.64645"
                            stroke="currentColor"
                          />
                          <line
                            x1="14.3536"
                            y1="0.353553"
                            x2="4.35355"
                            y2="10.3536"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="text-neutral-600 text-lg font-medium tracking-tight">
                        Pro-Pit Bull
                      </span>
                    </label>
                    <label className="relative flex items-center gap-2 mb-4">
                      <input
                        className="input-radio-2-06 opacity-0 absolute h-8 w-8 rounded-full"
                        type="checkbox"
                        id="neutral-radio"
                        name="field-radio"
                        value="neutral"
                        checked={alignment === "neutral"}
                        onChange={() => handleSetAlignment("neutral")}
                      />
                      <div className="border border-neutral-600 w-8 h-8 flex justify-center items-center rounded-full">
                        <svg
                          className="fill-current hidden"
                          id="neutral-style"
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={11}
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <line
                            x1="0.353553"
                            y1="5.64645"
                            x2="4.35355"
                            y2="9.64645"
                            stroke="currentColor"
                          />
                          <line
                            x1="14.3536"
                            y1="0.353553"
                            x2="4.35355"
                            y2="10.3536"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="text-neutral-600 text-lg font-medium tracking-tight">
                        Neutral
                      </span>
                    </label>
                    <label className="relative flex items-center gap-2 mb-4">
                      <input
                        className="input-radio-1-06 opacity-0 absolute h-8 w-8 rounded-full"
                        type="checkbox"
                        id="anti-radio"
                        name="field-radio"
                        value="anti"
                        checked={alignment === "anti"}
                        onChange={() => handleSetAlignment("anti")}
                      />
                      <div className="border border-neutral-600 w-8 h-8 flex justify-center items-center rounded-full">
                        <svg
                          className="fill-current hidden"
                          id="anti-style"
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={11}
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <line
                            x1="0.353553"
                            y1="5.64645"
                            x2="4.35355"
                            y2="9.64645"
                            stroke="currentColor"
                          />
                          <line
                            x1="14.3536"
                            y1="0.353553"
                            x2="4.35355"
                            y2="10.3536"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="text-neutral-600 text-lg font-medium tracking-tight">
                        Anti-Pit Bull
                      </span>
                    </label>
                  </div>

                  <div className="flex flex-wrap -m-4 justify-center">
                    <div className="w-full md:w-auto p-4">
                      <p className="mb-2 text-xl text-neutral-600 font-semibold tracking-tight">
                        <Link
                          to="/"
                          className="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200"
                        >
                          Back
                        </Link>
                      </p>
                    </div>
                    <div className="w-full md:w-auto p-4">
                      <p className="mb-2 text-xl text-neutral-600 font-semibold tracking-tight">
                        <Link
                          to="/test"
                          className="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-neutral-900 hover:bg-neutral-200 focus:bg-neutral-200 rounded-lg focus:ring-4 focus:ring-neutral-300 transition duration-200"
                        >
                          Next
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlignmentPage;
