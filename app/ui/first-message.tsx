import Image from 'next/image';

export default function FirstMessage() {
    return(
        <div className="rounded-3xl shadow w-full mb-6 bg-[#f5eadc]">
            <Image src="/firstMessage.jpg" width={640} height={300} className="rounded-t-3xl sm:w-full sm:h-72 sm:object-cover" alt="" />
            <p className='text-[#0D3C26] text-[17px] p-3'>سلام! من دکترپی هستم دستیار سلامتی شما. ساخته شده ام تا به پرسش های پزشکی و دندانپزشکی پاسخ بدم هر سوالی در این خصوص داری از من بپرس.</p>
        </div>
    )
}