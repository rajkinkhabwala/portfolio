import {Button } from "@/components/ui/button";
import MaxWidthWapper from "../utilities/MaxWidthWapper";
import { ProfileType } from "@/types/queries";
import { getProfile } from "@/sanity/queries";
import { Skeleton } from "../ui/skeleton";

export default async function Hero(){

  const profile: ProfileType[] = await getProfile();
  

    return(
        <section className="relative isolate w-full h-screen flex justify-center items-center -mt-16">
        <MaxWidthWapper>
          { profile ? 
          profile.map((data) => (
            <div key={data._id} className="mx-auto max-w-2xl sm:py-48">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Announcing our next round of funding.{' '}
                  <a href="#" className="font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  {data.headline}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {data.shortBio}
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Button variant={'default'}>Hire Me</Button>
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))
           : 
           <div className="mx-auto max-w-2xl sm:py-48">
           <div className="hidden sm:mb-8 sm:flex sm:justify-center">
             <Skeleton className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
               Announcing our next round of funding.{' '}
               <a href="#" className="font-semibold text-indigo-600">
                 <span className="absolute inset-0" aria-hidden="true" />
                 Read more <span aria-hidden="true">&rarr;</span>
               </a>
             </Skeleton>
           </div>
           <div className="text-center">
             <Skeleton className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
               
             </Skeleton>
             <Skeleton className="mt-6 text-lg leading-8 text-gray-600">
               
             </Skeleton>
             <div className="mt-10 flex items-center justify-center gap-x-6">
               <Button variant={'default'}>Hire Me</Button>
               <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                 Learn more <span aria-hidden="true">→</span>
               </a>
             </div>
           </div>
         </div>
            }
            
        </MaxWidthWapper>
        </section>
    )
}