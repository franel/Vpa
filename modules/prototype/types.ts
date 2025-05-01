export type PrototypeScreen = {
  id: string;
  name: string;
  components: UIComponent[];
};

export type UIComponent = {
  id: string;
  type: 'button' | 'input' | 'image' | 'text';
  props: Record<string, any>;
};
