import React from "react";
import { Link } from "react-router-dom";

const ResultsPage: React.FC = () => {
  return (
    <div className="antialiased bg-body text-body font-body">
      <section className="mt-4 pt-6 py-12 md:py-2">
        <div className="container mx-auto px-4">
          <div className="mb-20">
            <h2 className="mb-12 text-5xl font-semibold font-subheading">
              Your Results
            </h2>
            <div className="mb-5 text-xl text-neutral-700 font-medium">
              <p className="mb-5">
                You identified <span className="font-bold">30</span> out of{" "}
                <span className="font-bold">100</span> dogs as pit bulls.
              </p>
              <p className="mb-5">
                Based on the criteria you set, your overall accuracy was{" "}
                <span className="font-bold">33%</span>.
              </p>
              <p className="mb-5">
                This means that <span className="font-bold">20</span> dogs were
                identified incorrectly based on your critera.
              </p>
              <p className="mb-20">
                Out of all dogs shown, 18 were within{" "}
                <span className="font-bold">25%</span> of the threshold you set
                at the beginning of the test.
              </p>
            </div>
          </div>
          <div className="mb-20">
            <h2 className="text-5xl font-semibold font-subheading">
              Total Results
            </h2>
            <h6 className="mb-5 font-bold text-neutral-500">
              (All Participants)
            </h6>
            <p className="mb-6">
              All results tallied according to how participants identified
              themselves.
            </p>
            <table className="w-full mb-5 text-xl text-neutral-700 font-medium">
              <thead>
                <tr>
                  <th className="py-2">Alignment</th>
                  <th className="py-2">Count</th>
                  <th className="py-2">Avg. Accuracy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Pro-pit bull</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
                <tr>
                  <td className="py-2">Neutral</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
                <tr>
                  <td className="py-2">Anti-pit bull</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mb-20">
            <h2 className="text-5xl font-semibold font-subheading">
              Breakdown
            </h2>
            <h6 className="mb-5 font-bold text-neutral-500">(Pro-pit bull)</h6>
            <p className="mb-6">
              These results are based on the criteria set by participants who
              identified as pro-pit bull.
            </p>
            <table className="w-full mb-5 text-xl text-neutral-700 font-medium">
              <thead>
                <tr>
                  <th className="py-2">Breed Selection</th>
                  <th className="py-2">Count</th>
                  <th className="py-2">Avg. Accuracy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">APBT</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
                <tr>
                  <td className="py-2">All Breeds *</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mb-20">
            <h2 className="text-5xl font-semibold font-subheading">
              Breakdown
            </h2>
            <h6 className="mb-5 font-bold text-neutral-500">(Neutral)</h6>
            <p className="mb-6">
              These results are based on the criteria set by participants who
              identified as neutral in regards to pit bulls.
            </p>
            <table className="w-full mb-5 text-xl text-neutral-700 font-medium">
              <thead>
                <tr>
                  <th className="py-2">Breed Selection</th>
                  <th className="py-2">Count</th>
                  <th className="py-2">Avg. Accuracy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">APBT</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
                <tr>
                  <td className="py-2">All Breeds *</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mb-20">
            <h2 className="text-5xl font-semibold font-subheading">
              Breakdown
            </h2>
            <h6 className="mb-5 font-bold text-neutral-500">(Anti-pit bull)</h6>
            <p className="mb-6">
              These results are based on the criteria set by participants who
              identified as anti-pit bull.
            </p>
            <table className="w-full mb-5 text-xl text-neutral-700 font-medium">
              <thead>
                <tr>
                  <th className="py-2">Breed Selection</th>
                  <th className="py-2">Count</th>
                  <th className="py-2">Avg. Accuracy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">APBT</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
                <tr>
                  <td className="py-2">All Breeds *</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mb-20">
            <h2 className="text-5xl font-semibold font-subheading">
              Philosophy and Terminology
            </h2>
            <h6 className="mb-5 font-bold text-neutral-500">
              (All Participants)
            </h6>
            <p className="mb-6">
              The following results are intended to show how participants
              answered questions related to dog training and behavior.
            </p>
            <table className="table-fixed w-full mb-5 text-xl text-neutral-700 font-medium">
              <thead>
                <tr>
                  <th className="py-2">
                    Socialization
                    <br />
                    <div className="text-sm mt-2 text-neutral-500 font-medium">
                      "A well-socialized dog should be..."
                    </div>
                  </th>
                  <th className="py-2">
                    Count
                    <span className="ml-2 text-sm text-neutral-500">
                      ( pro | neutral | anti )
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">
                    "... friendly toward everyone and everything."
                  </td>
                  <td className="py-2">0 | 0 | 0</td>
                </tr>
                <tr>
                  <td className="py-2">
                    "... friendly toward people, but not necessarily other
                    dogs."
                  </td>
                  <td className="py-2">0 | 0 | 0</td>
                </tr>
                <tr>
                  <td className="py-2">
                    "... neutral around people and animals, in most places or
                    situations."
                  </td>
                  <td className="py-2">0 | 0 | 0</td>
                </tr>
                <br />
                <br />
              </tbody>
              <thead>
                <tr>
                  <th className="py-2">
                    Commands
                    <br />
                    <div className="text-sm mt-2 text-neutral-500 font-medium">
                      "My own dog has mastered..."
                    </div>
                  </th>
                  <th className="py-2">
                    Count
                    <span className="ml-2 text-sm text-neutral-500">
                      ( pro | neutral | anti )
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">
                    "... some of the basic commands (sit, stay, lay down,
                    come)."
                  </td>
                  <td className="py-2">0 | 0 | 0</td>
                </tr>
                <tr>
                  <td className="py-2">
                    "... all of the basic commands, as well as some tricks."
                  </td>
                  <td className="py-2">0 | 0 | 0</td>
                </tr>
                <tr>
                  <td className="py-2">
                    "... basic commands, tricks, and other skills like 'place'
                    or 'settle'."
                  </td>
                  <td className="py-2">0 | 0 | 0</td>
                </tr>
                <br />
                <br />
              </tbody>
              <thead>
                <tr>
                  <th className="py-2">
                    Management
                    <br />
                    <div className="text-sm mt-2 text-neutral-500 font-medium">
                      "When walking my dog, I use..."
                    </div>
                  </th>

                  <th className="py-2">
                    Count
                    <span className="ml-2 text-sm text-neutral-500">
                      ( pro | neutral | anti )
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">"... a collar or harness."</td>
                  <td className="py-2">0 | 0 | 0</td>
                </tr>
                <tr>
                  <td className="py-2">
                    "... a correction collar such as a prong or choke chain."
                  </td>
                  <td className="py-2">0 | 0 | 0</td>
                </tr>
                <tr>
                  <td className="py-2">
                    "... a combination of these, or something else."
                  </td>
                  <td className="py-2">0 | 0 | 0</td>
                </tr>
                <br />
                <br />
              </tbody>
              <thead>
                <tr>
                  <th className="py-2">
                    Containment
                    <br />
                    <div className="text-sm mt-2 text-neutral-500 font-medium">
                      "My dog has escaped from its collar, harness, or yard..."
                    </div>
                  </th>

                  <th className="py-2">
                    Count
                    <span className="ml-2 text-sm text-neutral-500">
                      ( pro | neutral | anti )
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">"... never."</td>
                  <td className="py-2">0 | 0 | 0</td>
                </tr>
                <tr>
                  <td className="py-2">"... once or twice."</td>
                  <td className="py-2">0 | 0 | 0</td>
                </tr>
                <tr>
                  <td className="py-2">"... many times."</td>
                  <td className="py-2">0 | 0 | 0</td>
                </tr>
                <br />
                <br />
              </tbody>
              <thead>
                <tr>
                  <th className="py-2">
                    Tool Usage
                    <br />
                    <div className="text-sm mt-2 text-neutral-500 font-medium">
                      "Tools such as prong collars and e-collars..."
                    </div>
                  </th>
                  <th className="py-2">
                    Count
                    <span className="ml-2 text-sm text-neutral-500">
                      ( pro | neutral | anti )
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">
                    "... are necessary for training a dog."
                  </td>
                  <td className="py-2">0 | 0 | 0</td>
                </tr>
                <tr>
                  <td className="py-2">
                    "... are sometimes necessary depending on the dog."
                  </td>
                  <td className="py-2">0 | 0 | 0</td>
                </tr>
                <tr>
                  <td className="py-2">
                    "... are cruel and should never be used."
                  </td>
                  <td className="py-2">0 | 0 | 0</td>
                </tr>
                <br />
                <br />
              </tbody>
              <thead>
                <tr>
                  <th className="py-2">
                    Dog Parks
                    <br />
                    <div className="text-sm mt-2 text-neutral-500 font-medium">
                      "I sometimes take my dog to the dog park."
                    </div>
                  </th>

                  <th className="py-2">
                    Count
                    <span className="ml-2 text-sm text-neutral-500">
                      ( pro | neutral | anti )
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">True</td>
                  <td className="py-2">0 | 0 | 0</td>
                </tr>
                <tr>
                  <td className="py-2">False</td>
                  <td className="py-2">0 | 0 | 0</td>
                </tr>
                <br />
                <br />
              </tbody>
              <thead>
                <tr>
                  <th className="py-2">
                    Safety
                    <br />
                    <div className="text-sm mt-2 text-neutral-500 font-medium">
                      "My dog is muzzle trained."
                    </div>
                  </th>

                  <th className="py-2">
                    Count
                    <span className="ml-2 text-sm text-neutral-500">
                      ( pro | neutral | anti )
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">True</td>
                  <td className="py-2">0 | 0 | 0</td>
                </tr>
                <tr>
                  <td className="py-2">False</td>
                  <td className="py-2">0 | 0 | 0</td>
                </tr>
                <br />
                <br />
              </tbody>
              <thead>
                <tr>
                  <th className="py-2">
                    Insurance
                    <br />
                    <div className="text-sm mt-2 text-neutral-500 font-medium">
                      "I have purchased liability coverage for my dog."
                    </div>
                  </th>

                  <th className="py-2">
                    Count
                    <span className="ml-2 text-sm text-neutral-500">
                      ( pro | neutral | anti )
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">True</td>
                  <td className="py-2">0 | 0 | 0</td>
                </tr>
                <tr>
                  <td className="py-2">False</td>
                  <td className="py-2">0 | 0 | 0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Link
            to="/1"
            className="mb-6 inline-flex items-center justify-center text-center h-16 p-5 font-semibold text-lg text-white tracking-tight bg-neutral-900 hover:bg-neutral-200 focus:bg-neutral-200 rounded-lg focus:ring-4 focus:ring-neutral-300 transition duration-200"
          >
            Go Back
          </Link>

          <div className="mb-3">
            * All Breeds includes the American Pit Bull Terrier (APBT), American
            Staffordshire Terrier, Staffordshire Bull Terrier, and American
            Bully.
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResultsPage;
