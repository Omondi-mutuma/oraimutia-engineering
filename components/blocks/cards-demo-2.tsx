"use client";
import { cn } from "@/lib/utils";

export default function CardDemo2() {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-2xl shadow-xl mx-auto flex flex-col justify-end p-4  border-transparent",
          "bg-[url(https://images.unsplash.com/photo-1580901369227-308f6f40bdeb?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3BveXQ5ZWpyZGp0azlndzV6OWcwZWFxcmdzZjVvNXN1ZDV3Z3doZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1dOcGQRaZYy4lftWBf/giphy.gifurl(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3BveXQ5ZWpyZGp0azlndzV6OWcwZWFxcmdzZjVvNXN1ZDV3Z3doZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1dOcGQRaZYy4lftWBf/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            Road Works
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            Get a quote for road upgrade and maintenance from the best civil
            engineers.
          </p>
        </div>
      </div>
    </div>
  );
}
