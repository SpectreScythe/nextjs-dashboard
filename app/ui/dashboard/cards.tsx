import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import {fetchCardData} from "@/app/lib/data";

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  return (
    <>
       {/*NOTE: comment in this code when you get to this point in the course*/}

      {
        <>
          <Card title="Collected" value={totalPaidInvoices} type="collected"/>
          <Card title="Pending" value={totalPendingInvoices} type="pending"/>
          <Card title="Total Invoices" value={numberOfInvoices} type="invoices"/>
          <Card title="Total Customers" value={numberOfCustomers} type="customers"/>
        </>
      }
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl p-2 shadow-sm bg-stone-800 text-stone-100">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-slate-300" /> : null}
        <h3 className="ml-2 text-stone-100 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-stone-700 px-4 py-8 text-center text-stone-100 text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
