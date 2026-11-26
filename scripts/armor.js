const ID = "anarchy-rules-patch";
const primary = i => i.type === "feat" && i.system.featType === "armor";
async function enforce(item, options, userId) {
  if (options?.anarchyArmorSync || userId !== game.user.id) return;
  const actor = item.parent;
  if (!actor || actor.documentName !== "Actor" || !actor.isOwner || !primary(item) || !item.system.active) return;
  const updates = actor.items.filter(i => i.id !== item.id && primary(i) && i.system.active).map(i => ({_id:i.id,"system.active":false}));
  if (!updates.length) return;
  try {
    await actor.updateEmbeddedDocuments("Item",updates,{anarchyArmorSync:true});
    ui.notifications.info(`${item.name} : autres armures principales désactivées.`);
  } catch (error) {
    console.error(ID,error);
    ui.notifications.error("Impossible de désactiver les autres armures.");
  }
}
Hooks.once("ready",()=>{
  if(game.system.id !== "sra2") return;
  Hooks.on("createItem",(item,options,userId)=>{void enforce(item,options,userId);});
  Hooks.on("updateItem",(item,changes,options,userId)=>{
    if(foundry.utils.getProperty(changes,"system.active") === true || changes["system.active"] === true) void enforce(item,options,userId);
  });
});
