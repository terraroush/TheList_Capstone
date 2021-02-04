<Form inline>
  <FormGroup>
    <Label for="toDoInput" hidden>
      toDoInput
    </Label>
    <Input
      type="text"
      name="toDoInput"
      id="toDoInput"
      placeholder="add to your list"
    />
  </FormGroup>{" "}
  <Button>Submit</Button>
  <div>
    <CustomInput
      type="switch"
      id="exampleCustomSwitch"
      name="customSwitch"
      label="Grocery List"
    />
  </div>
</Form>;

<Card>
  <CardHeader>
    <CardTitle tag="h5">{userList.title}</CardTitle>
    <CardSubtitle tag="h6" className="mb-2 text-muted">
      {userList.dateCreated}
    </CardSubtitle>
  </CardHeader>
  <UserListItems key={userList.id} userList={userList} />
  <CardFooter>
    <UserListForm />
  </CardFooter>
</Card>;
