import {Suspense} from "react";
import CardWrapper from "@/app/ui/dashboard/cards";
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import DashboardSkeleton from "@/app/ui/skeletons";
// import {RevenueChartSkeleton} from "@/app/ui/skeletons";
// import {LatestInvoicesSkeleton} from "@/app/ui/skeletons";
// import {CardsSkeleton} from "@/app/ui/skeletons";

export default async function Page() {
    return (
        <main className="bg-stone-900">
            <Suspense fallback={<DashboardSkeleton/>}>
                <h1 className={`text-stone-100 b-4 text-xl md:text-2xl py-2`}>
                    Dashboard
                </h1>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {/*<Suspense fallback={<CardsSkeleton/>}>*/}
                        <CardWrapper />
                    {/*</Suspense>*/}
                </div>
                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                    {/*<Suspense fallback={<RevenueChartSkeleton />}>*/}
                        <RevenueChart />
                    {/*</Suspense>*/}
                    {/*<Suspense fallback={<LatestInvoicesSkeleton />}>*/}
                        <LatestInvoices />
                    {/*</Suspense>*/}
                </div>
            </Suspense>
        </main>
    );
}