import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createLink = mutation({
  args: { link: v.string() },
  handler: async (ctx, {link}) => {
    const LinkId = await ctx.db.insert("SharedVid", { link });
    return LinkId
    // do something with `taskId`
  },
});

export const get = query({
  args: { id:v.optional(v.id("SharedVid")) },
  handler: async (ctx, {id}) => {
    console.log(id, " id")
    const VidContent =id ? await ctx.db.get(id):null
    return VidContent
    // do something with `taskId`
  },
});
