type Props = {
    project: {
      id: string;
      title: string;
      description: string;
    };
  };
  
  export default function ProjectCard({ project }: Props) {
    return (
      <View>
        <Text>{project.title}</Text>
        <Text>{project.description}</Text>
      </View>
    );
  }
  