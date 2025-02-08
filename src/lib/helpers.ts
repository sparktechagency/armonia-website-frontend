import { Slot } from "@/redux/features/auth/authSlice";

const getMinute = (time: string) => (Number(time.split(":")[0]) * 60) + Number(time.split(":")[1])
function getIndexOfSlot(slots: Slot[], time: string, option: "start" | "end") {
    return slots?.findIndex((item) => item[option] === time)
}

export const validateionTime = ({ start, end, slots }: { start: string; end: string, slots: Slot[] }) => {
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