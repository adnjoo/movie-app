import { Disclosure } from '@headlessui/react';
import React from 'react';

interface MobileSelectionProps {
  href: string;
  hrefs: string[];
}

export const MobileSelection = ({
  href,
  hrefs,
}: MobileSelectionProps): JSX.Element => {
  return (
    <div className="space-y-1 pt-2 pb-3" id="mobile-selection">
      <Disclosure>
        <Disclosure.Button
          as="a"
          href={hrefs[1]}
          className={`${
            href.slice(-1) === '/' || href.includes(hrefs[1])
              ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
              : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800'
          } block border-l-4 py-2 pl-3 pr-4 text-base font-medium`}
        >
          Movies
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href={hrefs[2]}
          className={`${
            href.includes(hrefs[2])
              ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
              : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800'
          } block border-l-4 py-2 pl-3 pr-4 text-base font-medium`}
        >
          TV Shows
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href={hrefs[3]}
          className={`${
            href.includes(hrefs[3])
              ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
              : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800'
          } block border-l-4 py-2 pl-3 pr-4 text-base font-medium`}
        >
          People
        </Disclosure.Button>
        {/* TODO: Favorites */}
        {/* <Disclosure.Button
        as='a'
        href={hrefs[3]}
        className={`${
          href.includes('favorites')
            ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
            : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
        } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
      >
        Favorites
      </Disclosure.Button> */}
      </Disclosure>
    </div>
  );
};
