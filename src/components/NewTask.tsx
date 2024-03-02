import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Toaster } from "./ui/toaster";
import { useToast } from "./ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { db } from "@/utils/supabase";
import { useState } from "react";
const formSchema = z.object({
  title: z.string().min(5, {
    message: "title must be at least 5 characters long",
  }),
  description: z.string().max(100, {
    message: "description limited to only 100 characters long",
  }),
});
export default function NewTask() {
  const [hasError, setHaserror] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    insertTodos(values);
    console.log(values);
  };

  const insertTodos = async (values: z.infer<typeof formSchema>) => {
    const { error } = await db.todos().insert({
      title: values.title,
      description: values.description,
    });
    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error adding to do",
      });
    } else {
      toast({
        title: "Success",
        description: "Added to do in the database",
      });
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger className="bg-background_brown rounded-xl text-2xl font-micro text-white py-2 px-[5rem]">
          NewTask
        </DialogTrigger>
        <DialogContent className="bg-[#ad9f8e] py-10">
          <DialogHeader>
            <DialogTitle className="font-micro text-2xl">
              Create new Task
            </DialogTitle>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-[3rem]">
                  <div className="">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem className="">
                          <FormControl>
                            <Input
                              placeholder="Title"
                              {...field}
                              className=" font-open_sans text-md outline-none bg-background_brown border-none rounded-xl"
                            />
                          </FormControl>
                          <FormDescription />
                          <FormMessage className="text-[#526935] font-bold" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="">
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder="description"
                              {...field}
                              className="bg-background_brown border-none rounded-xl "
                            />
                          </FormControl>
                          <FormDescription />
                          <FormMessage className="text-red-500 font-bold" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="text-right mt-6">
                  <Button className="bg-[#637f40] rounded-2xl px-[4rem] font-micro text-4xl text-center py-[.5rem]">
                    Add
                  </Button>
                </div>
              </form>
            </Form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
