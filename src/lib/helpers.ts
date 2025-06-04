import { TSlot } from "@/redux/features/auth/authSlice";
import { toast } from "react-toastify";

const getMinute = (time: string) => (Number(time.split(":")[0]) * 60) + Number(time.split(":")[1])
function getIndexOfSlot(slots: TSlot[], time: string, option: "start" | "end") {
    return slots?.findIndex((item) => item[option] === time)
}

export const validateionTime = ({ start, end, slots }: { start: string; end: string, slots: TSlot[] }) => {
    const firstSlotIndex = getIndexOfSlot(slots, start, "start")
    const lastSlotIndex = getIndexOfSlot(slots, end, "end")
    const serviceStartMinute = getMinute(start)
    const serviceEndMinute = getMinute(end)
    if (slots.length < 1) {
        throw new Error("Available service not found!")
    }
    // console.log("SERvice start", serviceStartMinute)
    // console.log("SERvice end", serviceEndMinute)
    if ((serviceStartMinute < serviceEndMinute) || (serviceStartMinute > 0 && serviceEndMinute === 0)) {
        // console.log(firstSlotIndex, lastSlotIndex)
        const mapTheSlotBetween = slots.slice(firstSlotIndex, lastSlotIndex + 1).map((item) => {
            return item.id
        })
        // console.log("Duration", mapTheSlotBetween.length*30)
        return mapTheSlotBetween;
    } else {
        throw new Error("Service available Start time be before End time!")
    }
}


export const validateAndSelectSlots = (
    startIndex: number,
    slotNeed: number,
    slots: TSlot[]
  ) => {
    const newArr = slots.slice(startIndex);
    newArr.splice(slotNeed, newArr.length - slotNeed);
  
    if (newArr.length < slotNeed) {
      toast.error(
        `Beautician does not have ${slotNeed} consecutive slots available. Please reduce the service duration or select earlier slots.`
      );
      throw new Error("slot error");
    }
  
    for (let i = 0; i < newArr.length - 1; i++) {
      const currentIndex = newArr[i]?.index;
      const nextIndex = newArr[i + 1]?.index;
  
      if (nextIndex === undefined) {
        toast.error("Please select the slots in order");
        throw new Error("slot error");
      }
  
      if (nextIndex - currentIndex !== 1) {
        toast.error(
          `Please select slots that should have ${slotNeed} slots in order. Otherwise, please change the service.`
        );
        throw new Error("slot error");
      }
    }
    return {ids:newArr.map((item: TSlot) => item.id),info:newArr};
  };
  