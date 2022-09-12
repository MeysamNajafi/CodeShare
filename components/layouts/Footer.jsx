import { Image } from "@nextui-org/react";

const Footer = () => {
    return (
        <div className="bg-primary-light rounded-t-[30px] mt-28">
            <div className="md:container mx-auto px-3 py-8">
                <div className="grid grid-cols-4 items-start justify-between">
                    <div>
                        <Image src="/logo.png" width={100} objectFit="contain" alt="Logo" />
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
                            از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
                            سطرآنچنان که لازم است
                        </p>
                    </div>
                    <div className="space-y-2 mx-auto">
                        <p className="font-bold text-lg">بخش‌های سایت</p>
                        <p>بخش‌های سایت</p>
                        <p>بخش‌های سایت</p>
                        <p>بخش‌های سایت</p>
                        <p>بخش‌های سایت</p>
                    </div>
                    <div className="space-y-3 mx-auto">
                        <p className="font-bold text-lg">شبکه‌های اجتماعی</p>
                        <div className="flex gap-x-2 items-center">
                            <Image
                                src="/insta.png"
                                width={22}
                                objectFit="contain"
                                alt="Zarin Pal"
                            />
                            اینستاگرام
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <Image
                                src="/telegram.png"
                                width={22}
                                objectFit="contain"
                                alt="Zarin Pal"
                            />
                            تلگرام
                        </div>
                    </div>
                    <div className="mx-auto">
                        <Image
                            src="/ZarinPal.png"
                            width={100}
                            objectFit="contain"
                            alt="Zarin Pal"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
