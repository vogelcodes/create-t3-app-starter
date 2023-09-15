import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.lead.findMany();
  }),
  saveLead: publicProcedure
    .input(z.object({ email: z.string(), phoneNumber: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const lead =  {
          email: input.email,
          phone: input.phoneNumber,
          avatarUrl: ""
        }

      
      const scriptURL = 'https://script.google.com/macros/s/AKfycbw72hugYvfvgDz18Ce4yxv9fU0XMtTcSmsgNV4My6rol2vvtN89OqiBlp7yGgDpAfHoDw/exec'
      const formData = new FormData();
      formData.append("email", input.email)
      formData.append("phone", input.phoneNumber)
      formData.append('avatarUrl', lead.avatarUrl || "")
      formData.append('data', new Date().toISOString() || "")
      const gSheets = await fetch(scriptURL, { method: 'POST', headers: {
      }, body: formData})
      console.log(lead)


      return lead;
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
