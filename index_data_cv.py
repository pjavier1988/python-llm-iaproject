import os

from dotenv import load_dotenv
from llama_index import GPTSimpleVectorIndex, SimpleDirectoryReader


load_dotenv()
openai_api_key = os.environ.get('OPENAI_API_KEY')
documents = SimpleDirectoryReader('data').load_data()
index = GPTSimpleVectorIndex(documents)
name = index.query("What is the candidate's name?")
address = index.query("Where is the candidate's address?")
print(name)
print(address)
# save to disk
index.save_to_disk('index.json')

# load from disk
index = GPTSimpleVectorIndex.load_from_disk('index.json')

