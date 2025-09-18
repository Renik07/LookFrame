// src/components/WindowsFrame.tsx
import iconGoogle from "@/images/windows-desktop/i-google.png";
import iconClose from "@/images/windows-desktop/windows-close.png";
import iconMinimise from "@/images/windows-desktop/windows-minimise.png";
import iconWindow from "@/images/windows-desktop/windows-window.png";
import { FrameProps } from "@/lib/types";
import { useDevices } from "@/store/useDevices";
import Image from "next/image";
import { useState } from "react";

export default function AndroidTabletFrame({
  url,
  device,
  baseWidth,
  baseHeight,
  scale,
}: FrameProps) {
  const { panelMode } = useDevices();
  const [isHovered, setIsHovered] = useState(false);

  // Вычисляем высоту верхней панели
  let topHeight = 0;
  let topPadding = 0;

  if (panelMode === "fixed") {
    topHeight = device.browserBar?.expanded ?? 0;
    topPadding = device.browserBar?.expanded ?? 0;
  } else if (panelMode === "float") {
    topHeight = isHovered ? 0 : device.browserBar?.expanded ?? 0;
    topPadding = isHovered ? 0 : device.browserBar?.expanded ?? 0;
  }

  return (
    <div
      className="relative"
      style={{
        width: baseWidth,
        height: baseHeight,
        transform: `scale(${scale})`,
        transformOrigin: "top left",
      }}
    >
      {panelMode !== "off" && (
        <div
          className="absolute top-0 left-0 w-full flex flex-col border-b font-['Segoe_UI','Roboto',sans-serif]"
          style={{ height: topPadding }}
        >
          {(panelMode === "fixed" || (panelMode === "float" && !isHovered)) && (
            <div
              className="transition-all duration-100"
              style={{ height: topHeight }}
            >
              {/* Tab bar */}
              <div
                className="flex flex-row pl-2 bg-gray-200"
                style={{ height: topHeight / 2 }}
              >
                <div className="flex flex-row items-center flex-grow">
                  {/* First Tab */}
                  <div className="flex-1 max-w-[240px]">
                    <div className="relative -left-2">
                      <div className="relative z-10 flex items-center h-[34px] px-2.5 rounded-t-lg bg-white transition-all duration-100">
                        <Image
                          alt="Google"
                          src={iconGoogle}
                          width={16}
                          height={16}
                        />
                        <div className="ml-2 mr-1 flex-grow overflow-hidden text-ellipsis whitespace-nowrap text-xs text-gray-700">
                          Google
                        </div>
                        <div className="relative w-4 h-4 rounded-full hover:bg-gray-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            className="absolute top-1 left-1 w-2 h-2 fill-gray-500 hover:fill-gray-700"
                          >
                            <path d="M16,1.6L14.4,0L8,6.4L1.6,0L0,1.6L6.4,8L0,14.4L1.6,16L8,9.6l6.4,6.4l1.6-1.6L9.6,8L16,1.6z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Second Tab */}
                  <div className="flex-1 max-w-[240px]">
                    <div className="relative -left-2">
                      <div className="relative z-10 flex items-center h-[34px] px-2.5 rounded-t-lg hover:bg-gray-100 transition">
                        <div className="flex-grow overflow-hidden text-ellipsis whitespace-nowrap text-xs text-gray-500">
                          New Tab
                        </div>
                        <div className="relative w-4 h-4 rounded-full hover:bg-gray-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            className="absolute top-1 left-1 w-2 h-2 fill-gray-500 hover:fill-gray-700"
                          >
                            <path d="M16,1.6L14.4,0L8,6.4L1.6,0L0,1.6L6.4,8L0,14.4L1.6,16L8,9.6l6.4,6.4l1.6-1.6L9.6,8L16,1.6z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* New Tab button */}
                  <div className="flex items-center justify-center w-7 h-5 p-2 border-[#2d303256] border-l hover:bg-gray-300">
                    <svg viewBox="0 0 16 16" className="w-3 h-3 fill-gray-600">
                      <path d="M16 9.1H9.1V16H6.9V9.1H0V6.9h6.9V0h2.3v6.9H16V9.1z" />
                    </svg>
                  </div>
                </div>
                <div className="w-16"></div>

                {/* Window buttons */}
                <div className="flex flex-row">
                  <div className="flex items-center justify-center w-[45px] h-[29px] hover:bg-gray-300">
                    <Image
                      alt="minimise"
                      src={iconMinimise}
                      width={10}
                      height={10}
                    />
                  </div>
                  <div className="flex items-center justify-center w-[45px] h-[29px] hover:bg-gray-300">
                    <Image
                      alt="window"
                      src={iconWindow}
                      width={10}
                      height={10}
                    />
                  </div>
                  <div className="flex items-center justify-center w-[45px] h-[29px] hover:bg-red-600">
                    <Image alt="close" src={iconClose} width={10} height={10} />
                  </div>
                </div>
              </div>

              {/* Main bar */}
              <div
                className="flex flex-row items-center px-1.5 bg-white"
                style={{ height: topHeight / 2 }}
              >
                {/* Back button */}
                <div className="flex items-center justify-center w-7 h-7 mx-0.5 rounded-full hover:bg-gray-200 active:bg-gray-300">
                  <svg viewBox="0 0 16 16" className="w-3 h-3 fill-gray-600">
                    <path d="M16,7H3.8l5.6-5.6L8,0L0,8l8,8l1.4-1.4L3.8,9H16V7z" />
                  </svg>
                </div>

                {/* Forward button */}
                <div className="flex items-center justify-center w-7 h-7 mx-0.5 rounded-full">
                  <svg viewBox="0 0 16 16" className="w-3 h-3 fill-gray-400">
                    <path d="M8,0L6.6,1.4L12.2,7H0v2h12.2l-5.6,5.6L8,16l8-8L8,0z" />
                  </svg>
                </div>

                {/* Refresh button */}
                <div className="flex items-center justify-center w-7 h-7 mx-0.5 rounded-full hover:bg-gray-200 active:bg-gray-300">
                  <svg viewBox="0 0 16 16" className="w-3 h-3 fill-gray-600">
                    <path d="M13.6,2.3C12.2,0.9,10.2,0,8,0C3.6,0,0,3.6,0,8s3.6,8,8,8c3.7,0,6.8-2.5,7.7-6h-2.1c-0.8,2.3-3,4-5.6,4c-3.3,0-6-2.7-6-6s2.7-6,6-6c1.7,0,3.1,0.7,4.2,1.8L9,7h7V0L13.6,2.3z" />
                  </svg>
                </div>

                {/* Address bar */}
                <div className="flex flex-row items-center flex-grow h-[80%] mx-2 rounded-full bg-gray-100 overflow-hidden">
                  <div className="flex items-center h-6 min-w-[32px] px-2 mx-0.5 rounded-full hover:bg-gray-300">
                    <svg
                      viewBox="0 0 16 16"
                      className="w-2.5 h-2.5 fill-gray-600"
                    >
                      <path d="M12.6,5.3h-0.8V3.8C11.8,1.7,10.1,0,8,0S4.2,1.7,4.2,3.8v1.5H3.4C2.6,5.3,1.9,6,1.9,6.9v7.6c0,0.8,0.7,1.5,1.5,1.5h9.1c0.8,0,1.5-0.7,1.5-1.5V6.9C14.1,6,13.4,5.3,12.6,5.3z M10.4,5.3H5.6V3.8c0-1.3,1.1-2.4,2.4-2.4s2.4,1.1,2.4,2.4V5.3z" />
                    </svg>
                  </div>
                  <div className="flex-grow text-xs whitespace-pre">
                    <span className="text-gray-500">https://</span>
                    <span className="text-gray-900">google.com</span>
                  </div>
                  <div className="flex items-center h-6 min-w-[32px] px-2 mx-0.5 rounded-full hover:bg-gray-300">
                    <svg viewBox="0 0 16 16" className="w-4 h-4 fill-blue-500">
                      <path d="M8,12.2l4.9,3l-1.3-5.6L16,5.8l-5.8-0.5L8,0L5.8,5.3L0,5.8l4.4,3.8l-1.3,5.6L8,12.2z" />
                    </svg>
                  </div>
                </div>

                {/* Separator */}
                <div className="w-px h-4 mx-2 bg-gray-300"></div>

                {/* Menu button */}
                <div className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-200 active:bg-gray-300">
                  <svg
                    viewBox="0 0 16 16"
                    className="w-3.5 h-3.5 fill-gray-600"
                  >
                    <path d="M8,4c1.1,0,2-0.9,2-2S9.1,0,8,0S6,0.9,6,2S6.9,4,8,4z M8,6C6.9,6,6,6.9,6,8s0.9,2,2,2s2-0.9,2-2S9.1,6,8,6z M8,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.1,12,8,12z" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <iframe
        className="relative z-0 transition-all duration-100"
        src={url || undefined}
        style={{
          width: "100%",
          height: "100%",
          paddingTop: topPadding,
          paddingBottom: 0,
          border: "0",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
}
