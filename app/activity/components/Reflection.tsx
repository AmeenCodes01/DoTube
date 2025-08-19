"use client"

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";

import React, { useState } from 'react'

type Habit = {
  name: string;
  frequency: 'daily' | 'every_2_days' | 'every_3_days';
  error?: string;
};


function Reflection() {
    const [name, setName] = useState("")
    const [summary, setSummary] = useState("")
    const [habits, setHabits] = useState<Habit[]>([
        { name: '', frequency: 'daily' },
    ]);

     const handleChange = (index: number, field: keyof Habit, value: string) => {
    const updated = [...habits];
    updated[index][field] = value as Habit[keyof Habit];
    if (field === 'name' && value.trim() !== '') {
      updated[index].error = '';
    }
    setHabits(updated);
  };

  const addHabitRow = () => {
    const lastHabit = habits[habits.length - 1];
    if (lastHabit.name.trim() === '') {
      const updated = [...habits];
      updated[habits.length - 1].error = 'Habit name cannot be empty';
      setHabits(updated);
      return;
    }
    setHabits([...habits, { name: '', frequency: 'daily' }]);
  };

  const deleteHabitRow = (index: number) => {
    const updated = habits.filter((_, i) => i !== index);
    setHabits(updated.length ? updated : [{ name: '', frequency: 'daily' }]);
  };



    return (

        <Dialog open={true}>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>


                <Input value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name" />
                <textarea
                    className="border-1 p-2 text-md placeholder:text-sm rounded-sm"
                    onChange={(e) => setSummary(e.target.value)}
                    value={summary} placeholder="Enter your summary" />

                <div className="space-y-4 w-full  ">
                    {habits.map((habit, index) => (
                        <>
                        <div key={index} className="flex gap-4 items-center">
                            <input
                                type="text"
                                placeholder="Enter habit"
                                value={habit.name}
                                onChange={(e) => handleChange(index, 'name', e.target.value)}
                                className="border px-3 py-2 rounded w-full"
                            />
                            
                            <select
                                value={habit.frequency}
                                onChange={(e) => handleChange(index, 'frequency', e.target.value)}
                                className="border px-2 py-2 rounded"
                            >
                                <option value="daily">Each day</option>
                                <option value="every_2_days">Each 2 days</option>
                                <option value="every_3_days">Each 3 days</option>
                            </select>
                               <button
            onClick={() => deleteHabitRow(index)}
            className="text-red-600 hover:text-red-800 px-2"
            title="Delete habit"
          >
            ✕
          </button>

                        </div>
                        {habit.error && (
                                <span  className="text-red-500 text-sm mt-1">{habit.error}</span>
                              )}
                        </>
                    ))}
                    
                    <Button
                        onClick={addHabitRow}
                        className="ml-auto flex "
                    variant={"secondary"}
                    >
                        Add Habit
                    </Button>
                </div>
<DialogClose asChild>
<Button>Done</Button>
</DialogClose>

            </DialogContent>
        </Dialog>

    )
}

export default Reflection