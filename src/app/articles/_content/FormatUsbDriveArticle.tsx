export default function FormatUsbDriveArticle() {
  return (
    <div className='text-base sm:text-lg leading-relaxed text-neutral-200 space-y-4 bg-black flex flex-col p-4 sm:rounded-2xl'>
      <h3 className='text-green-400 font-bold'>1) Identify the USB drive</h3>
      <p>
        First, list all block devices and identify which one is your USB drive.
      </p>
      <code className='font-mono bg-black/60 px-2 py-1 rounded border border-green-500/40 block'>
        lsblk -o NAME,LABEL,SIZE,RM,MODEL,TRAN
      </code>

      <h3 className='text-green-400 font-bold'>2) Unmount the USB drive</h3>
      <p>Before formatting, make sure the USB drive is not mounted.</p>
      <code className='font-mono bg-black/60 px-2 py-1 rounded border border-green-500/40 block'>
        sudo umount /dev/sdc* # replace /dev/sdc with your device
      </code>

      <h3 className='text-green-400 font-bold'>3) Clean existing signatures</h3>
      <p>
        Wipe old filesystem signatures so they don&apos;t confuse the system.
      </p>
      <code className='font-mono bg-black/60 px-2 py-1 rounded border border-green-500/40 block'>
        sudo wipefs -a /dev/sdc
      </code>

      <p>Then create a new partition that uses 100% of the space:</p>
      <code className='font-mono bg-black/60 px-2 py-1 rounded border border-green-500/40 block'>
        sudo parted -a optimal /dev/sdc mkpart primary fat32 0% 100%
      </code>

      <h3 className='text-green-400 font-bold'>4) Format the USB drive</h3>
      <p>
        Format the new partition with FAT32 (good compatibility with most
        systems).
      </p>
      <code className='font-mono bg-black/60 px-2 py-1 rounded border border-green-500/40 block'>
        sudo mkfs.vfat -F 32 /dev/sdc1
      </code>

      <h3 className='text-green-400 font-bold'>
        5) Set a label (name) for the drive
      </h3>
      <p>Finally, give your USB drive a friendly label.</p>
      <code className='font-mono bg-black/60 px-2 py-1 rounded border border-green-500/40 block'>
        sudo fatlabel /dev/sdc1 PENDRIVE
      </code>
    </div>
  );
}
