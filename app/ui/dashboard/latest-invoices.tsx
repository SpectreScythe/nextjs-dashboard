import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { LatestInvoice } from '@/app/lib/definitions';

export default async function LatestInvoices({
  latestInvoices,
}: {
  latestInvoices: LatestInvoice[];
}) {
  return (
    <div className="flex w-full flex-col md:col-span-4 bg-stone-800">
      <h2 className={`${lusitana.className} text-stone-500 mb-4 text-xl md:text-2xl px-4`}>
        Latest Invoices
      </h2>
      <div className="flex grow flex-col justify-between h-150 rounded-xl bg-stone-800 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}

        { <div className="px-6 rounded-md h-150 bg-stone-600">
          {latestInvoices.map((invoice, i) => {
            return (
              <div
                key={invoice.id}
                style={{paddingTop: "1.16rem",paddingBottom: "1.16rem"}}
                className={clsx(
                  'flex flex-row items-center justify-between',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <Image
                    src={invoice.image_url}
                    alt={`${invoice.name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm text-stone-800 font-semibold md:text-base">
                      {invoice.name}
                    </p>
                    <p className="hidden text-sm text-stone-800 sm:block">
                      {invoice.email}
                    </p>
                  </div>
                </div>
                <p
                  className={`${lusitana.className} text-stone-800 truncate text-sm font-medium md:text-base`}
                >
                  {invoice.amount}
                </p>
              </div>
            );
          })}
        </div> }
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-stone-500" />
          <h3 className="ml-2 text-sm text-stone-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
