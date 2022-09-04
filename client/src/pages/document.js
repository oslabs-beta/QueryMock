{
      "kind": "Document",
      "definitions": [
          {
              "kind": "OperationDefinition",
              "operation": "query",
              "name": {
                  "kind": "Name",
                  "value": "getTracks"
              },
              "variableDefinitions": [],
              "directives": [],
              "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [
                      {
                          "kind": "Field",
                          "name": {
                              "kind": "Name",
                              "value": "tracksForHome"
                          },
                          "arguments": [],
                          "directives": [],
                          "selectionSet": {
                              "kind": "SelectionSet",
                              "selections": [
                                  {
                                      "kind": "Field",
                                      "name": {
                                          "kind": "Name",
                                          "value": "id"
                                      },
                                      "arguments": [],
                                      "directives": []
                                  },
                                  {
                                      "kind": "Field",
                                      "name": {
                                          "kind": "Name",
                                          "value": "title"
                                      },
                                      "arguments": [],
                                      "directives": []
                                  },
                                  {
                                      "kind": "Field",
                                      "name": {
                                          "kind": "Name",
                                          "value": "thumbnail"
                                      },
                                      "arguments": [],
                                      "directives": []
                                  },
                                  {
                                      "kind": "Field",
                                      "name": {
                                          "kind": "Name",
                                          "value": "length"
                                      },
                                      "arguments": [],
                                      "directives": []
                                  },
                                  {
                                      "kind": "Field",
                                      "name": {
                                          "kind": "Name",
                                          "value": "modulesCount"
                                      },
                                      "arguments": [],
                                      "directives": []
                                  },
                                  {
                                      "kind": "Field",
                                      "name": {
                                          "kind": "Name",
                                          "value": "author"
                                      },
                                      "arguments": [],
                                      "directives": [],
                                      "selectionSet": {
                                          "kind": "SelectionSet",
                                          "selections": [
                                              {
                                                  "kind": "Field",
                                                  "name": {
                                                      "kind": "Name",
                                                      "value": "name"
                                                  },
                                                  "arguments": [],
                                                  "directives": []
                                              },
                                              {
                                                  "kind": "Field",
                                                  "name": {
                                                      "kind": "Name",
                                                      "value": "photo"
                                                  },
                                                  "arguments": [],
                                                  "directives": []
                                              }
                                          ]
                                      }
                                  }
                              ]
                          }
                      }
                  ]
              }
          }
      ],
      "loc": {
          "start": 0,
          "end": 170
      }
    }