import { Review } from '../types/Review'

const Reviews = ({ ulasan }: { ulasan: Review }) => {
    return (
        <div className="p-8 rounded-lg">
            <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3" />
                <div>
                    <p className="font-semibold">{ulasan?.User?.name}</p>
                    <p className="text-sm text-gray-500">{ulasan?.User?.address}</p>
                </div>
            </div>
            <p className="text-sm text-gray-700 mb-3">{ulasan?.description}</p>
            <div className="flex gap-2 flex-wrap">
                {ulasan?.review_images?.map((_, idx) => (
                    <div key={idx} className="w-[82px] h-[59px] bg-gray-300 rounded" />
                ))}
            </div>
        </div>
    )
}

export default Reviews;
