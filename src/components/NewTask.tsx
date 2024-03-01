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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
const formSchema = z.object({
  title: z.string().min(5, {
    message: "title must be at least 5 characters long",
  }),
  description: z.string().max(100, {
    message: "description limited to only 100 characters long",
  }),
});
export default function NewTask() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Dialog>
      <DialogTrigger className="bg-background_brown rounded-xl text-2xl font-micro text-white py-2 px-[5rem]">
        NewTask
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle className="font-micro text-2xl">
            Create new Task
          </DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div>
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
                        <FormMessage className="text-red-500 font-bold" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Task Description"
                          {...field}
                          className=" font-open_sans text-md"
                        />
                      </FormControl>
                      <FormDescription />
                      <FormMessage className="text-red-500 font-bold" />
                    </FormItem>
                  )}
                />
              </div>
              <Button>Add</Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
