import React from 'react'

const SideBarBio = () => {
  return (
         <div className="flex flex-col bg-gray-800 border items-center border-gray-200 mt-4 w-40 py-1 px-1 rounded-lg">
        <div className="h-10 w-10 rounded-full border overflow-hidden">
          <img
            src="/profile.png"
            alt="Avatar"
            className="h-full w-full"
          />
        </div>
        <div className="text-sm font-semibold mt-2">Aminos Co.</div>
        <div className="text-xs text-gray-500">Lead UI/UX Designer</div>
        <div className="flex flex-row items-center mt-3">
          <div className="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
            <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
          </div>
          <div className="leading-none ml-1 text-xs">Active</div>
        </div>
      </div>
  )
}

export default SideBarBio