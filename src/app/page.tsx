import Image from 'next/image';

export default function Home() {
  return (
    <div className={"flex w-full fjustify-center items-center"}>
      <div className={"bg-red-200 grow"}>
          <Image
              src="/500x500.jpg"
              width={500}
              height={500}
              alt="Moi"
          />
      </div>
    </div>
  );
}
