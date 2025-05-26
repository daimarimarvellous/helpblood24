import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Skeleton className="h-10 w-1/3 mb-2" />
      <Skeleton className="h-6 w-1/4 mb-8" />

      <Skeleton className="h-12 w-full mb-8" />

      <div className="space-y-8">
        <div>
          <Skeleton className="h-8 w-32 mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-32 w-full rounded-md" />
            ))}
          </div>
        </div>

        <div>
          <Skeleton className="h-8 w-32 mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i + 10} className="h-32 w-full rounded-md" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
